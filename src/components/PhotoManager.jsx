import React from "react";
import PhotosUpLoader from ".././PhotosUpLoader";

/**
 * Props:
 * - group: string (e.g., "general", "sleeping")
 * - photosByGroup: object { general: [...], sleeping: [...] }
 * - onChange: function(updatedGroups: object)
 */
const PhotoManager = ({ group, photosByGroup, onChange }) => {
  const groupPhotos = photosByGroup[group] || [];

  const handleGroupChange = (newPhotos, isReplace = false) => {
    const updated = isReplace
      ? newPhotos
      : [...new Set([...groupPhotos, ...newPhotos])];

    const updatedGroups = {
      ...photosByGroup,
      [group]: updated,
    };

    onChange(updatedGroups);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold capitalize mb-2">{group} Photos</h3>
      <PhotosUpLoader addedPhotos={groupPhotos} onChange={handleGroupChange} />
    </div>
  );
};

export default PhotoManager;
