import React from 'react'

import StarRoundedIcon from '@material-ui/icons/StarRounded'
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded'
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded'

import { useStyles } from './styles'

const Rating = ({ value, text }) => {

    const classes = useStyles()

    return (
        <>
        <div className={classes.rating}>
            <span>
                { value >=1 
                ? <StarRoundedIcon /> 
                : value >= 0.5 ? <StarHalfRoundedIcon />
                : <StarOutlineRoundedIcon />}
            </span>
            <span>
                { value >=2 
                ? <StarRoundedIcon /> 
                : value >= 1.5 ? <StarHalfRoundedIcon />
                : <StarOutlineRoundedIcon />}
            </span>
            <span>
                { value >=3 
                ? <StarRoundedIcon /> 
                : value >= 2.5 ? <StarHalfRoundedIcon />
                : <StarOutlineRoundedIcon />}
            </span>
            <span>
                { value >=4 
                ? <StarRoundedIcon /> 
                : value >= 3.5 ? <StarHalfRoundedIcon />
                : <StarOutlineRoundedIcon />}
            </span>
            <span>
                { value >=5 
                ? <StarRoundedIcon /> 
                : value >= 4.5 ? <StarHalfRoundedIcon />
                : <StarOutlineRoundedIcon />}
            </span>
        </div>
        <div>
            <span>{text && text}</span>
        </div>
        </>            
            
        
    )
}

export default Rating
