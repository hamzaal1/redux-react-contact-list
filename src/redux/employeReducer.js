

const init = {
    Employers: [
        {
            image: "https://www.vieribottazzini.com/wp-content/uploads/X1DII1_00190_slide.jpg",
            name: "Hamza",
            prenom: "Demnani",
            fonction: "Manager",
        }
    ]
}

const employeReducer = (state = init, action) => {
    switch (action.type) {
        case "NEW_EMPLOYER":
            const { name, prenom, image, fonction } = action.payload
            return {
                ...state,
                Employers: [...state.Employers, {
                    name,
                    prenom,
                    image,
                    fonction,
                }]
            }
        default:
            return state;
    }
}

export default employeReducer;