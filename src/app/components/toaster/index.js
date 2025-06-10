import toast, { Toaster, } from "react-hot-toast";

function ToasterContainer() {
  return (
    <Toaster />
  );
};

function SuccessToaster(message) {
  return (
    toast.success(message)
  );
};

function ErrorToaster(message) {
  return (
    toast.error(message)
  );
};

export { SuccessToaster, ErrorToaster };
export default ToasterContainer;