import { Typography, Breadcrumbs, Link } from '@material-ui/core'
import { useStyles } from './styles'

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {

    const classes = useStyles()

    return (
        <div>
            <Breadcrumbs aria-label='breadcrumb'>
                {step1 ? (
                    <Link href='/login'>
                        Sign In
                    </Link>
                ) : (
                    <span>Sign in</span>
                )}
                {step2 ? (
                    <Link href='/shipping'>
                        Shipping
                    </Link>
                ) : (
                    <span>Shipping</span>
                )}
                {step3 ? (
                    <Link href='/payment'>
                        Payment
                    </Link>
                ) : (
                    <span>Sign in</span>
                )}
                {step4 ? (
                    <Link href='/placeorder'>
                        Place Order
                    </Link>
                ) : (
                    <span>Place Order</span>
                )}
            </Breadcrumbs>
        </div>
    )
}

export default CheckOutSteps
