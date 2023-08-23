import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";

// {
//     "recipeName": "Teriyaki Salmon",
//     "username": "oliver_jones",
//     "email": "oliver.jones@example.net",
//     "comments": [],
//     "difficulty": "Intermediate",
//     "prepTime": "10 minutes",
//     "cookTime": "15 minutes",
//     "totalTime": "25 minutes",
//     "servings": 2,
//     "cuisine": "Asian",
//     "mealType": "Main Course",
//     "occasion": "Date Night",
//     "dietaryConsiderations": [],
//     "recipeType": "Nonveg",
//     "ingredients": [
//       "2 salmon fillets",
//       "Salt and pepper, to taste",
//       "1/4 cup (60ml) teriyaki sauce",
//       "2 tablespoons soy sauce",
//       "1 tablespoon honey",
//       "1 tablespoon rice vinegar",
//       "1 teaspoon sesame oil",
//       "1 teaspoon grated fresh ginger",
//       "1 clove garlic, minced",
//       "Sesame seeds, for garnish",
//       "Sliced green onions, for garnish"
//     ],
//     "instructions": [
//       "Preheat the oven to 400°F (200°C).",
//       "Season the salmon fillets with salt and pepper.",
//       "In a bowl, whisk together teriyaki sauce, soy sauce, honey, rice vinegar, sesame oil, grated ginger, and minced garlic.",
//       "Place the salmon fillets in a baking dish and pour the teriyaki sauce mixture over them.",
//       "Bake the salmon in the preheated oven for about 12-15 minutes, or until the salmon flakes easily with a fork.",
//       "While baking, baste the salmon with the sauce a couple of times.",
//       "Garnish the teriyaki salmon with sesame seeds and sliced green onions.",
//       "Serve the teriyaki salmon with steamed rice or vegetables.",
//       "Enjoy your flavorful and savory teriyaki salmon!"
//     ],
//     "notes": [
//       "You can also grill the salmon on a barbecue for a smoky flavor.",
//       "Feel free to adjust the amount of honey and soy sauce to your taste."
//     ],
//     "equipment": [
//       "Baking dish",
//       "Bowl",
//       "Whisk"
//     ],
//     "imageURL": "https://source.unsplash.com/featured/1280x720?food",
//     "nutrition": {
//       "calories": 300,
//       "totalFat": "15g",
//       "saturatedFat": "2.5g",
//       "cholesterol": "80mg",
//       "sodium": "800mg",
//       "totalCarbohydrates": "15g",
//       "dietaryFiber": "0g",
//       "sugars": "12g",
//       "protein": "25g"
//     },
//     "tags": ["salmon", "teriyaki", "Asian", "main course", "date night"]
//   },
export const DataCard = ({ first, second, third }) => {
  return (
    <Tr m={".5rem .8rem"}>
      <Td>{first}</Td>
      <Td>{second}</Td>
      <Td maxW={"15rem"}>{third}</Td>
      <Td>
        <DIV>
          <button class="edit_Btn Btn">
            <p>Edit</p>
            <svg class="svg" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
            </svg>
          </button>
        </DIV>
      </Td>
      <Td>
        <DIV>
          <button class="del_Btn Btn">
            <p>Delete</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash-2 svg del_svg"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </button>
        </DIV>
      </Td>
    </Tr>
  );
};

const DIV = styled.span`
  .edit_Btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 38px;
    border: none;
    padding: 0px 10px;
    background-color: rgb(80, 189, 101);
    color: white;
    font-weight: 400;
    cursor: pointer;
    border-radius: 10px;

    transition-duration: 0.3s;
  }

  .Btn > p {
    visibility: hidden;
  }
  .del_Btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    height: 38px;
    border: none;
    padding: 0px 10px;
    background-color: rgb(255, 65, 65);
    color: white;
    font-weight: 400;
    cursor: pointer;
    border-radius: 10px;
  }
  .svg {
    width: 15px;
    position: absolute;
    right: 0;
    margin-right: 17px;
    fill: white;

    /* transition-duration: 0.3s; */
  }
  .del_svg {
    margin-right: 28px;
  }
  /* .Btn:hover {
    color: transparent;
  } */

  .Btn:hover svg {
    /* right: 43%;
    margin: 0;
    padding: 0;
    border: none;
    transition-duration: 0.3s; */
    visibility: hidden;
  }
  .Btn:hover p {
    visibility: visible;
  }

  .Btn:active {
    transform: translate(3px, 3px);
    transition-duration: 0.3s;
    box-shadow: 2px 2px 0px rgb(109, 109, 109);
  }
`;
