import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const data = ['#ef476f', '#06d6a0', '#118ab2']

const UseStyles =  makeStyles((theme) => (  {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    avatarUsers:{
        [theme.breakpoints.down('sm')]:{    
            
        },
        [theme.breakpoints.between('sm', 'md')]:{

        },
        [theme.breakpoints.between('md', 'lg')]:{
            fontSize: '100px'
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: '100px'
        }
    }
}));

export default UseStyles