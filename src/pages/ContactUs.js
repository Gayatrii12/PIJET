import 'tailwindcss/tailwind.css';

const ContactUs = () => {
  return (
    <>
    <div className="text-4xl font-bold mb-4 text-center mt-4  text-pijet-blue py-3">
        CONTACT US
    </div>
    <div className="max-w-7xl md:mx-auto p-6 my-4 text-justify ring-4 ring-pijet-blue mx-auto w-11/12 md:w-3/5 ">
      
      <div className='flex text-lg md:text-xl mb-4'>
        <div className='w-2/5 px-1 md:px-6 text-pijet-blue'>
          <strong> Issuing/Publishing Body:</strong>
        </div>
        <div className='text-left'>
          <p>SCTR's Pune Institute of Computer Technology</p>
          <p>Survey No-27, Near Trimurti Chowk,</p>
          <p>Dhankawadi, Pune-411043 (India)</p>
          <p>Phone No: 24371101 (Ext 104)</p>
          <p>Dr. S. T. Gandhe</p>
          <p>Principal, PICT, Pune.</p>
          <p><a className='text-blue-500' href="mailto:principal@pict.edu">principal@pict.edu</a></p>
          {/* <p>020-24371101 Ext:104</p> */}
        </div>
      </div>
      <div className='flex text-lg md:text-xl mb-4'>
        <div className='w-2/5 px-1 md:px-6 text-pijet-blue'>
          <strong>Coordinator:</strong>
        </div>
        <div className='text-left'>
          <p>Dr. R. C. Jaiswal</p>
          <p>PIJET Journal Coordinator</p>
          <p><a className='text-blue-500' href="mailto:pijet@pict.edu">pijet@pict.edu</a></p>
          <p>020-24371101 Ext:354</p>
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
