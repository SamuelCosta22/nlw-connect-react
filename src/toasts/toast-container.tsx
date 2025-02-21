import { Bounce, ToastContainer as ReactToastContainer } from 'react-toastify';

export function ToastContainer() {
  return (
    <ReactToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  );
}
