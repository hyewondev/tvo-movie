import {gql} from "@apollo/client";

export const GET_MOVIE = gql`
    query ($id: String) {
      movies {
        movie(id: $id) {
          id
          title
          releaseDate
          rating
          runtime
          overview,
          keywords{
            id,
            name
          }
          genres{
            id,
            name
          }
          images {
            posters {
              width
              height
              image(size: W154)
            }
          }
          spokenLanguages {
            iso639_1
            name
          }
        }
      }
    }
`;