import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageList = () => {
  const [category, setCategory] = useState('kitchen');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [name,setName] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://backend-eyb7.onrender.com/images/${category}`);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [category]);

  const handleEdit = (image) => {
    setSelectedImage(image);
    setName(image.name);
   setDescription(image.description);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://backend-eyb7.onrender.com/IhdUploadImg/${selectedImage._id}`, { description,name });
      toast.success('Details updated successfully!');
      setSelectedImage(null);
      setName('');
      setDescription('');
      setImages(images.map(img => img._id === selectedImage._id ? { ...img, description,name } : img));
    } catch (error) {
      toast.error('Failed to update Details!');
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-eyb7.onrender.com/delete/${id}`);
      toast.success('Image deleted successfully!');
      setImages(images.filter(img => img._id !== id));
    } catch (error) {
      toast.error('Failed to delete image!');
    }
  };

  return (
    <div className=" items-center mt-[10%] min-h-screen  w-full">
      <div className=" w-full p-8  rounded-lg shadow-lg  ">
        <div className='flex justify-between'>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Uploaded Images</h2>
        <div className="mb-4 float-right">
          <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="category">
       
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>
        <div className='flex flex-row items-center justify-around flex-wrap'>      

        

        
        {images.map((image) => (
          <div key={image._id} className="mb-4 p-5">
            <div className="flex flex-col items-center justify-around">
              <img src={`${image.image.toString('base64')}`} alt={image.name} className="w-56 h-56  rounded-md object-cover mr-4" />
              <div>
                <p className="text-gray-700">{image.name}</p>
                <p className="text-gray-500">{image.description}</p>
              </div>
              <div>
                <button onClick={() => handleEdit(image)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(image._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
        {selectedImage && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Update Name</h3>
             <input
              type='text'
              value={name} 
              placeholder={name}
              onChange={(e) => setName(e.target.value)}
              />

            <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Description</h3>
            <textarea
              value={description}
              placeholder={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Update 
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ImageList;
