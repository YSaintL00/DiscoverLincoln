import React, { useRef, useState } from "react";
import styles from '../../styles/components/OrganizationHero.module.css';



export default function OrganizationReviewForm(props) {

    const name = useRef();
    const rating = useRef();
    const content = useRef();

    const [submitted, setSubmitted] = useState('');

    const submitReview = () => {

        const postData = {data: {
            name: name.current.value,
            rating: rating.current.value,
            content: content.current.value,
            organization: props.id,
        }}

        return fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
        .then((response) => {
            if (response.ok) {
                setSubmitted("Thank you for submitting your review!")
            } else {
                setSubmitted("There was an error submitting your review.")
            }
        })
        .catch((error) => {
            setSubmitted("There was an error submitting your review.");
        });
    }

    return (
        <div className="w-full inline-flex flex-col justify-center items-center">
            <form className={"inline-flex h-full w-full flex-col justify-end items-center gap-4 pb-4 " + (submitted ? 'hidden' : '')}>
                <div className="w-full inline-flex flex-row justify-between items-center gap-4">
                    <input className={"w-6/12 h-16 bg-cream border-2 border-neutral-400 border-solid focus:outline-none text-black text-md font-roboto rounded pl-4 " + styles['review-input']} 
                        type="text" placeholder="Enter your name..." ref={name}>
                    </input>
                    <select className={"w-6/12 h-16 bg-cream border-2 border-neutral-400 border-solid focus:outline-none text-md font-roboto rounded pl-4 " + styles['review-select']}
                        ref={rating}
                    >
                            <option className="text-neutral-500" value="" disabled selected>Select your star rating...</option>
                            <option className="text-black" value="1">1</option>
                            <option className="text-black" value="2">2</option>
                            <option className="text-black" value="3">3</option>
                            <option className="text-black" value="4">4</option>
                            <option className="text-black" value="5">5</option>
                    </select>
                </div>
                <input className={"inline-flex w-full h-16 bg-cream border-2 border-neutral-400 border-solid focus:outline-none text-black text-md font-roboto rounded pl-4 " + styles['review-input']} 
                        type="text" placeholder="Type your review here..." ref={content}>
                </input>
                <div className="w-full h-16 bg-green rounded hover:bg-light-green active:bg-green transition-colors cursor-pointer inline-flex justify-center items-center font-roboto-slab-bold text-xl text-cream" 
                    onClick={submitReview}>
                    Submit
                </div> 
            </form>
            <div className={"inline-flex justify-center items-center text-xl font-roboto text-green " + (submitted ? '' : 'hidden')}>{submitted}</div>
        </div>
    )
}