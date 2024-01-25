import 'tailwindcss/tailwind.css';

const ContactUs = () => {
  return (
    <>
    <div className="text-4xl font-bold mb-4 text-center mt-4  text-pijet-blue py-3">
        CONTACT US
    </div>
    <div className="max-w-7xl mx-auto p-6 my-4 text-justify ring-4 ring-pijet-blue w-3/5 ">
      
      <div className='flex text-xl mb-4'>
        <div className='w-1/2 px-6 text-pijet-blue'>
          <strong>Publishing Body:</strong>
        </div>
        <div>
          <p>Dr. S. T. Gandhe</p>
          <p>Principal, PICT, Pune.</p>
          <p><a className='text-blue-500' href="mailto:principal@pict.edu">principal@pict.edu</a></p>
          <p>020-24371101 Ext:104</p>
        </div>
      </div>
      <div className='flex text-xl mb-4'>
        <div className='w-1/2 px-6 text-pijet-blue'>
          <strong>Coordinator:</strong>
        </div>
        <div>
          <p>Dr. R. C. Jaiswal</p>
          <p>PIJET Journal Coordinator</p>
          <p><a className='text-blue-500' href="mailto:pijet@pict.edu">pijet@pict.edu</a></p>
          <p>020-24371101 Ext:254</p>
        </div>
      </div>
      <div className="col-span-1 text-2xl  text-pijet-blue">
        <strong>For any issues related to manuscripts, please email pijet@pict.edu along with your manuscript ID for publication related queries.</strong>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
