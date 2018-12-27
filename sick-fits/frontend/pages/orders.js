import PleaseSignIn from '../components/PleaseSignin';
import OrderList from '../components/OrderList'
import Order from '../components/Order';

const OrdersPage = props => (
  <div>
    <PleaseSignIn>
        <OrderList />
    </PleaseSignIn>
  </div>
)

export default OrdersPage;