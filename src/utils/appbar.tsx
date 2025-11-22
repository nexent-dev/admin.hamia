import { Button, Divider, IconButton, Badge, Menu, MenuItem, ListItemIcon, ListItemText, Typography, Box } from "@mui/material";
import { useState, type FC } from "react";
import { FaBell, FaSun, FaMoon, FaUser, FaSignOutAlt, FaCog, FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import { useRecoilState } from "recoil";
import { theme as themeAtom } from "../context/global.states";
import useAuth from "../hooks/useAuth";

interface AppBarProps {
    onToggleSidebar?: () => void;
}

export const AppBar: FC<AppBarProps> = ({ onToggleSidebar }) => {
    const navigate = useNavigate();
    const [theme, setTheme] = useRecoilState<string>(themeAtom);
    const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);
    const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
    const api = useAPI();
    const { profile }: any = useAuth();
    const [notifications] = useState([
        { id: 1, title: 'New video uploaded', message: 'Video processing completed', time: '5 min ago' },
        { id: 2, title: 'Comment received', message: 'Someone commented on your video', time: '1 hour ago' },
        { id: 3, title: 'System update', message: 'New features available', time: '2 hours ago' },
    ]);

    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
        setNotificationAnchor(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setNotificationAnchor(null);
    };

    const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setUserMenuAnchor(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setUserMenuAnchor(null);
    };

    const handleProfile = () => {
        handleUserMenuClose();
        navigate('/profile');
    };

    const handleSettings = () => {
        handleUserMenuClose();
        navigate('/settings');
    };

    const handleLogout = async () => {
        handleUserMenuClose();
        await api.logout();        
        navigate(0)
    };

    return (
        <div className="app-bar d-flex justify-content-between align-items-center w-100 p-3" style={{ height: '59px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--background-dimmer)'}}>
            <div className="left">
                <Button variant="text" color="inherit" disableElevation onClick={onToggleSidebar}>
                    <FiMenu size={24} />
                </Button>
            </div>
            <div className="right d-flex justify-content-end align-items-center gap-2 mx-4">
                {/* Theme Toggle */}
                <IconButton size="medium" onClick={handleThemeToggle} title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                    {theme === 'light' ? (
                        <FaSun size={16} style={{color: 'var(--text-light)'}}/>
                    ) : (
                        <FaMoon size={16} style={{color: 'var(--text-light)'}}/>
                    )}
                </IconButton>
                
                <Divider orientation="vertical"/>
                
                {/* Notifications */}
                <IconButton size="medium" onClick={handleNotificationClick} title="Notifications">
                    <Badge badgeContent={notifications.length} color="error">
                        <FaBell size={16} style={{color: 'var(--text-light)'}}/>
                    </Badge>
                </IconButton>
                <Menu
                    anchorEl={notificationAnchor}
                    open={Boolean(notificationAnchor)}
                    onClose={handleNotificationClose}
                    PaperProps={{
                        sx: { width: 320, maxHeight: 400 }
                    }}
                >
                    <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid var(--border-color)' }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Notifications
                        </Typography>
                    </Box>
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <MenuItem key={notification.id} onClick={handleNotificationClose}>
                                <Box>
                                    <Typography variant="body2" fontWeight={600}>
                                        {notification.title}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {notification.message}
                                    </Typography>
                                    <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 0.5 }}>
                                        {notification.time}
                                    </Typography>
                                </Box>
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>
                            <Typography variant="body2" color="text.secondary">
                                No new notifications
                            </Typography>
                        </MenuItem>
                    )}
                </Menu>
                
                {/* User Menu */}
                <IconButton size="medium" onClick={handleUserMenuClick} title="Account">
                    <FaUser size={16} style={{color: 'var(--text-light)'}}/>
                </IconButton>
                <Menu
                    anchorEl={userMenuAnchor}
                    open={Boolean(userMenuAnchor)}
                    onClose={handleUserMenuClose}
                    PaperProps={{
                        sx: { width: 220 }
                    }}
                >
                    {profile && (
                        <Box sx={{ px: 2, py: 1.5 }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                {profile?.user?.first_name} {profile?.user?.last_name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {profile?.user?.email}
                            </Typography>
                        </Box>
                    )}
                    {profile && <Divider />}
                    <MenuItem onClick={handleProfile}>
                        <ListItemIcon>
                            <FaUserCircle size={18} />
                        </ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleSettings}>
                        <ListItemIcon>
                            <FaCog size={18} />
                        </ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <FaSignOutAlt size={18} style={{ color: '#d32f2f' }} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography color="error">Logout</Typography>
                        </ListItemText>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}
