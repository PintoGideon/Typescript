// Combining multiple types together

interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvc: string;
  type: "stripe";
}

interface PayPal {
  email: string;
  type: "paypal";
}

type CheckoutCard = Order & Stripe;
type CheckoutPaypal = Order & PayPal;

const order: Order = {
  id: "#test",
  amount: 100,
  currency: "USD",
};

const orderCard: CheckoutCard = {
  ...order,
  type: "stripe",
  card: "5129 1234 1212 1222",
  cvc: "211",
};

const orderPayPal: CheckoutPaypal = {
  ...order,
  type: "paypal",
  email: "test@email.com",
};

type Payload = CheckoutPaypal | CheckoutCard;

function checkout(payload: Payload) {
  // ?
  if (payload.type === "stripe") {
    console.log(`Paid by ${payload.cvc}`);
  }
  if (payload.type === "paypal") {
    console.log(`Paid by ${payload.email}`);
  }
}
