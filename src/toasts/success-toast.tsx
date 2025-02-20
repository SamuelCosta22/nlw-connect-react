import { Bounce, toast } from 'react-toastify';

interface SuccessToastProps {
  text: string;
}

export function SuccessToast({ text }: SuccessToastProps) {
  return toast.success(`${text}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'dark',
    transition: Bounce,
  });
}
