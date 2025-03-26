const stripe = Stripe('pk_test_51QUoj5F4T6ANMEGyRI1HEg4zaKmY3NbaNdzEVsgyR1v5G5jbEtFRhWb5yr3R5ptNdYOVngueKj4x7tRYYEuQbeJl003Ky4fVJz');
const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
});