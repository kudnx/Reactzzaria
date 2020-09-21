import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import t from 'prop-types'
import Header from './header'
import * as routes from '../../routes'

const ChoosePizzaSize = React.lazy(() => import('../choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('../choose-pizza-flavours'))
const ChoosePizzaQuantity = React.lazy(() => import('../choose-pizza-quantity'))
const Checkout = React.lazy(() => import('../checkout'))
const CheckoutConfirmation = React.lazy(() => import('../checkout-confirmation'))
const CheckoutSuccess = React.lazy(() => import('../checkout-success'))

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Suspense fallback='Loading...'>
      <Switch>
        <Route path={routes.HOME} exact component={ChoosePizzaSize} />
        <Route path={routes.CHOOSE_PIZZA_FLAVOURS} exact component={ChoosePizzaFlavours} />
        <Route path={routes.CHOOSE_PIZZA_QUANTITY} exact component={ChoosePizzaQuantity} />
        <Route path={routes.CHECKOUT} exact component={Checkout} />
        <Route path={routes.CHECKOUT_CONFIRMATION} exact component={CheckoutConfirmation} />
        <Route path={routes.CHECKOUT_SUCCESS} exact component={CheckoutSuccess} />
      </Switch>
    </Suspense>
  </>
)

const SpacerWrapper = ({ classes }) => (
  <div className={classes.main} />
)

SpacerWrapper.propTypes = {
  classes: t.object
}

const style = (theme) => {
  return {
    main: theme.mixins.toolbar
  }
}

const Spacer = withStyles(style)(SpacerWrapper)

export default Main
