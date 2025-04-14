import React, { useRef, useState } from 'react';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [value, setValue] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessFrame, setShowSuccessFrame] = useState(false); // Success frame state
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(form.current);

    try {
      const response = await axios.post('https://backend-eyb7.onrender.com/send-email', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.data.success) {
        toast.success('Thank you for visiting. Our team will reach out to you shortly!');
        setValue(false); // Hide the form
        setShowSuccessFrame(true); // Show the success frame
        setTimeout(() => {
          setShowSuccessFrame(false);
         
          navigate('/'); // Redirect to home page after delay
        }, 5000); // 5-second delay for success frame
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('An error occurred while sending the email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {value ? (
        <div className="form ml-[-1%] mt-[-2%] md:mt-[5%] center fixed h-[100%] py-5 w-screen backdrop-blur-sm z-50">
          <div className="container w-full absolute h-[80%]">
            <button
              className="text-3xl font-bold ml-[90%] text-white rounded-full text-zinc-800 hover:text-yellow-500"
              onClick={() => setValue(false)}
            >
              X
            </button>

            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-zinc-300 rounded-xl py-2 mx-auto shadow-lg overflow-hidden bg-zinc-100">
              <div className="w-[50%] translate-x-[50%] h-auto md:w-full md:h-auto md:translate-x-[0] lg:w-1/2 flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center">
                <video src="/images/formvideo.mp4" loop autoPlay muted className="h-[360px] w-auto" />
              </div>
              <div className="w-full lg:w-1/2 py-4 mt-[-10%] ml-[10%] md:mt-0 md:py-16 md:px-12">
                <h2 className="text-xl md:text-3xl mb-4 font-semibold text-zinc-700">Book Free Consultation</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" placeholder="Enter Your Name" name="user_name" required className="border border-gray-400 py-1 px-2 w-[80%] rounded-md" />
                  <input type="text" placeholder="Enter Your Email" name="user_email" required className="border border-gray-400 py-1 px-2 w-[80%] rounded-md mt-5" />
                  <input type="text" placeholder="Mobile Number" name="number" required className="border border-gray-400 py-1 px-2 w-[80%] rounded-md mt-5" />
                  <input type="text" placeholder="Enter Your Current Localization / City" name="user_location" required className="border border-gray-400 py-1 px-2 w-[80%] rounded-md mt-5" />
                  <input type="text" placeholder="Requirements" name="looks" className="border border-gray-400 py-1 px-2 w-[80%] rounded-md mt-5" />
                  <div className="mt-5 flex gap-x-3">
                    <label htmlFor="media" className="text-red-800 text-sm">Reference Area</label>
                    <input type="file" name="media" id="media" className="text-grey-600" />
                  </div>
                  <button
                    type="submit"
                    className={`mt-5 ml-[10%] md:ml-0 md:w-full text-s p-2 text-center md:text-lg bg-gradient-to-r from-amber-500 to-pink-500 md:py-3 rounded-md text-white ${isSubmitting ? 'loading-btn' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Free Consultation 😊'}
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Success Frame */}
      {showSuccessFrame && (
        <div className="success-frame text-s md:text-lg" >
          🎉 Form Submitted Successfully! 🎉 <br />
          Redirecting you to the home page...
        </div>
      )}
    </div>
  );
}

export default Form;
