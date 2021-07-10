import {gql} from "@apollo/client";

export const GET_SEARCH_MOVIES = gql`
    query ($term: String){
      movies {
        search(
          first: 10
          term: $term
        ) {
          edges {
            node {
              id
              title
              releaseDate
              rating
              images {
                posters {
                  width
                  height
                  image(size: W154)
                }
              }
            }
          }
        }
      }
    }
`;