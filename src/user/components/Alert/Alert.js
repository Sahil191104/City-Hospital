import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import { resetAlert } from '../../../redux/slice/alertSlice';

function Alert(props) {
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    console.log(alert);

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                }
            })
        }

        const Time = setTimeout(() => {
            dispatch(resetAlert())
        }, 2000)

        return () => {
            clearTimeout(Time)
        }

    }, [alert.text])

    return (
        <div>

        </div>
    );
}

export default Alert;