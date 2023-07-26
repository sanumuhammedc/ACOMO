import Image from 'next/image';
import Link from 'next/link';

const HostelCard = () => {

  const handleEdit = () => {
    console.log('edit');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <Link href="/" className='prompt_card'>
      <div className='flex flex-center'>
        <Image
          src="/assets/images/notfound.jpeg"
          alt='user_image'
          width={500}
          height={500}
          className='w-full h-fit rounded-t-lg'
        />
      </div>

      <div className='p-4'>
        <h3 className='font-satoshi text-gray-900 text-xl font-bold mb-1'>hostel name</h3>
        <div className='font-satoshi text-sm text-gray-700 flex'>
          <Image src="/assets/icons/location.svg" width={15} height={15} alt='location' /> 
          location
        </div>
      </div>

      {/* {session?.user.id === post.creator._id && pathName === "/profile" && (
          <div className='flex-end gap-4 border-t border-gray-100 pt-3 mr-3 mb-2'>
            <p
              className='font-inter text-sm blue_gradient cursor-pointer'
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className='font-inter text-sm orange_gradient cursor-pointer'
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )} */}
    </Link>
  );
};

export default HostelCard;