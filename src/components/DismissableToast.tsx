import { CloseIcon } from '@/components/icons';
import  React from 'react';
import { toast, ToastBar, Toaster } from 'react-hot-toast';

export default function DismissableToast() {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-right'
        toastOptions={{
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className=' rounded-full p-1 ring-primary-400 transition hover:bg-[#444] focus:outline-none focus-visible:ring'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <CloseIcon/>
                    {/* <HiX /> */}
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}