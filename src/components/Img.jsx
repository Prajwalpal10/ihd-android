// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import imageCompression from 'browser-image-compression';

// const UploadForm = () => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [category, setCategory] = useState('');
//     const [image, setImage] = useState(null);
//     const [uploadProgress, setUploadProgress] = useState(0);


//     const handleImageChange = async(e) => {
//         const file = e.target.files[0];
//         try {
//           // Compress and convert the image to WebP format
//           const options = {
//             maxSizeMB: 1,
//             maxWidthOrHeight: 800,
//             useWebWorker: true,
//             fileType: 'image/webp', // Convert to WebP format
//           };
//           const compressedFile = await imageCompression(file, options);
//           const reader = new FileReader();
//           reader.readAsDataURL(compressedFile);
//           reader.onloadend = () => {
//             setImage(reader.result); // Store the base64 part
//             toast.success('Finally compress the image!');
            
//           };
//         } catch (error) {
//           console.error('Error compressing the image:', error);
//           toast.error('Failed to compress the image!');
//         }
//       };
// /*
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newImage = {
//             name,
//             description,
//             category,
//             image
//         };       

//         await axios.post('https://ihd.onrender.com/IhdUploadImg', newImage,{});
//         toast.success('Image uploaded successfully!');
        
//     };
//     */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newImage = {
//         name,
//         description,
//         category,
//         image
//     }; 

//     try {
//       await axios.post('http://localhost:5000/IhdUploadImg', newImage, {
//         onUploadProgress: (progressEvent) => {
//           const { loaded, total } = progressEvent;
//           setUploadProgress(Math.round((loaded * 100) / total));
//         },
//       });
//       toast.success('Image Uploaded successfully!');
//       setUploadProgress(0); // Reset progress bar
//     } catch (err) {
//       toast.error('Failed to Upload!');
//       setUploadProgress(0); // Reset progress bar
//     }
//   };

//     return (
//         <>
//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md mt-[10%]">
//             <h2 className="text-2xl font-semibold text-center mb-4">Upload Image</h2>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Name</label>
//                 <input 
//                     type="text" 
//                     placeholder="Name" 
//                     value={name} 
//                     onChange={(e) => setName(e.target.value)} 
//                     className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Description</label>
//                 <textarea 
//                     placeholder="Description" 
//                     value={description} 
//                     onChange={(e) => setDescription(e.target.value)} 
//                     className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Category</label>
//                 <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     >
//                     <option value="">Select a category</option>
//                     <option value="kitchen">Kitchen</option>
//                     <option value="livingroom">Living Room</option>
//                     <option value="wardrobe">Wardrobe</option>
//                     <option value="bedroom">Bedroom</option>
//                     <option value="bathroom">Bathroom</option>
//                 </select>
//             </div>
//             <div className="mb-4">
//                 <label className="block text-gray-700">Image</label>
//                 <input 
//                     type="file" 
//                     onChange={handleImageChange} 
//                     className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
//                     />
//             </div>
        
//             {uploadProgress > 0 && (
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Upload Progress</label>
//               <div className="w-full bg-gray-200 rounded-full">
//                 <div className="bg-gradient-to-r from-amber-500 to-pink-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${uploadProgress}%` }}>
//                   {uploadProgress}%
//                 </div>
//               </div>
//             </div>
//           )}

            
//             <div className="text-center">
//                 <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
//             </div>
//         </form>
//         <ToastContainer />
//                     </>
//     );
// };

// export default UploadForm;



import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageCompression from 'browser-image-compression';

const UploadForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [youtubeVideoId, setYoutubeVideoId] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        try {
            // Compress and convert the image to WebP format
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 800,
                useWebWorker: true,
                fileType: 'image/webp', // Convert to WebP format
            };
            const compressedFile = await imageCompression(file, options);
            const reader = new FileReader();
            reader.readAsDataURL(compressedFile);
            reader.onloadend = () => {
                setImage(reader.result); // Store the base64 part
                toast.success('Image compressed successfully!');
            };
        } catch (error) {
            console.error('Error compressing the image:', error);
            toast.error('Failed to compress the image!');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const newImage = {
            name,
            description,
            category,
            image,
            youtubeVideoId
        };

        try {
            await axios.post('https://backend-eyb7.onrender.com/IhdUploadImg', newImage, {
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    setUploadProgress(Math.round((loaded * 100) / total));
                },
            });
            toast.success('Image uploaded successfully!');
            setUploadProgress(0); // Reset progress bar
            setName('');
            setDescription('');
            setCategory('');
            setImage(null);
            setYoutubeUrl('');
            setYoutubeVideoId('');
        } catch (err) {
            console.error('Error uploading the image:', err);
            toast.error('Failed to upload!');
            setUploadProgress(0); // Reset progress bar
        } finally {
            setLoading(false);
        }
    };

    const handleYoutubeUrlChange = (e) => {
        const url = e.target.value;
        setYoutubeUrl(url);
        const videoId = getYoutubeVideoId(url);
        setYoutubeVideoId(videoId);
    };

    const getYoutubeVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md mt-[10%]">
                <h2 className="text-2xl font-semibold text-center mb-4">Upload Image</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea 
                        placeholder="Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select a category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="livingroom">Living Room</option>
                        <option value="wardrobe">Wardrobe</option>
                        <option value="bedroom">Bedroom</option>
                        <option value="bathroom">Bathroom</option>
                        <option value="civil">Construction</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input 
                        type="file" 
                        onChange={handleImageChange} 
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">YouTube Video URL</label>
                    <input
                        type="text"
                        placeholder="YouTube Video URL"
                        value={youtubeUrl}
                        onChange={handleYoutubeUrlChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                {youtubeVideoId && (
                    <div className="mb-4">
                        <label className="block text-gray-700">Video Preview</label>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                )}
                {uploadProgress > 0 && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Upload Progress</label>
                        <div className="w-full bg-gray-200 rounded-full">
                            <div className="bg-gradient-to-r from-amber-500 to-pink-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${uploadProgress}%` }}>
                                {uploadProgress}%
                            </div>
                        </div>
                    </div>
                )}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};

export default UploadForm;
