import React from "react";

const getContentByType = (type, content, TYPE_LIST) => {
  if (type === TYPE_LIST) {
    return (
      <>
        {content.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </>
    );
  }

  return content;
};

export default getContentByType;
