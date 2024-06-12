import toast from 'react-hot-toast';

export const handleError = (error: Error) => {
  // chequemos si se creo el error con el Error constructor, o si es un string
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'An unexpected error occurred';
  }

  toast.error(message);
};
