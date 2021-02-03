import React from "react";
import { useStaticQuery } from "gatsby";

function Gallery() {
  const galleryData = useStaticQuery(galleryQuery);
  const galleries = galleryData.allContentfulGalleryTagsAndItems.edges;

  return (
    <div id='gallery'>
      <div class='container'>
        <h1 class='text-yellow pb-5'>Gallery</h1>

        {galleries.map((gallery, index) => {
          return (
            <div>
              <h2>{gallery.node.tag}</h2>{" "}
              <div class='row pt-3 px-3'>
                {galleries[index].node.images.map((image) => {
                  return (
                    <div>
                      <img
                        class='gallery-item m-3'
                        src={image.file.url}
                        alt='gallery-item'
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const galleryQuery = graphql`
  {
    allContentfulGalleryTagsAndItems {
      edges {
        node {
          tag
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
export default Gallery;
