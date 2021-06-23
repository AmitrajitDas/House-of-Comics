import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { 
    ClickAwayListener, 
    Grow, 
    Paper, 
    Popper, 
    MenuItem, 
    MenuList,
    Button 
    } from '@material-ui/core'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import { userLogoutAction } from '../../redux/actions/userLoginAction'
import { useStyles } from './styles'

const UserInfo = ({ userData }) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (e) => {
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(e) {
        if (e.key === 'Tab') {
        e.preventDefault()
        setOpen(false)
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open)

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus()
        }

        prevOpen.current = open;

    }, [open]);

    const logoutHandler = () => {

        dispatch(userLogoutAction())

    }

    return (
        <div>
            <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ color: '#161616', marginTop: '5px'}}
            >
                {userData.name}
                <ArrowDropDownIcon />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
                </Grow>
            )}
            </Popper>
        </div>
  )
} 

export default UserInfo