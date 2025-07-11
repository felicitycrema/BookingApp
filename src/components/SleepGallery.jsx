import { useState } from "react";

const SleepGallery = ({ sleepingPhotos = [] }) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const togglePhoto = (photo) => {
    setSelectedPhotos((prev) =>
      prev.includes(photo) ? prev.filter((p) => p !== photo) : [...prev, photo]
    );
  };

  if (!sleepingPhotos.length) return null;

  return (
    <div className="mt-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Select Sleeping Photos</h2>
        <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {sleepingPhotos.map((photo) => {
            const isSelected = selectedPhotos.includes(photo);
            return (
              <div
                key={photo}
                onClick={() => togglePhoto(photo)}
                className={`relative h-32 cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                  isSelected ? "border-blue-600" : "border-transparent"
                }`}
              >
                <img
                  src={`http://localhost:4000/upload/${photo}`}
                  alt="Sleeping photo"
                  className="w-full h-full object-cover"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-40 flex items-center justify-center text-white text-sm font-semibold">
                    Selected
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedPhotos.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {selectedPhotos.map((photo) => (
              <div
                key={photo}
                className="relative h-32 rounded-2xl overflow-hidden"
              >
                <img
                  src={`http://localhost:4000/upload/${photo}`}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SleepGallery;

// import { useState } from "react";

// const SleepGallery = ({ addedPhotos = [] }) => {
//   const [selectedPhotos, setSelectedPhotos] = useState([]);

//   const togglePhoto = (photo) => {
//     setSelectedPhotos((prev) =>
//       prev.includes(photo) ? prev.filter((p) => p !== photo) : [...prev, photo]
//     );
//   };

//   if (!addedPhotos.length) return null;

//   return (
//     <div className="mt-6 space-y-6">
//       {/* Photo selection */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Select Photos to Preview</h2>
//         <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {addedPhotos.map((photo) => {
//             const isSelected = selectedPhotos.includes(photo);
//             return (
//               <div
//                 key={photo}
//                 onClick={() => togglePhoto(photo)}
//                 className={`relative h-32 cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
//                   isSelected ? "border-blue-600" : "border-transparent"
//                 }`}
//               >
//                 <img
//                   src={`http://localhost:4000/upload/${photo}`}
//                   alt="photo option"
//                   className="w-full h-full object-cover"
//                 />
//                 {isSelected && (
//                   <div className="absolute inset-0 bg-blue-600 bg-opacity-40 flex items-center justify-center text-white text-sm font-semibold">
//                     Selected
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Preview section */}
//       {selectedPhotos.length > 0 && (
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Preview</h2>
//           <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//             {selectedPhotos.map((photo) => (
//               <div
//                 key={photo}
//                 className="relative h-32 rounded-2xl overflow-hidden"
//               >
//                 <img
//                   src={`http://localhost:4000/upload/${photo}`}
//                   alt="preview"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SleepGallery;
