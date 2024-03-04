import React from 'react';
import styles from '../../styles/components/OrganizationHero.module.css';
import StarRating from '../StarRating';
import calculateAverageRating from '@/util/calculateAverageRating';
import DollarRating from '../DollarRating';

const IndividualOrganizationHero = ({ organizationData }) => {

    console.log(organizationData.data.attributes.dollarRating);
    
    return (
        <div>
            <div className={styles['hero-section']}>
                <div className={styles['left']}>
                    <div className={styles['organization-text']}>
                        <div className={styles['top-text']}>
                            <h1 className={styles['main-heading']}>{organizationData.data.attributes.name}</h1>
                            <div className={styles['organization-type-rating']}>
                                <p>{organizationData.data.attributes.typeOfOrganization}</p>
                                <StarRating rating={calculateAverageRating(organizationData.data.attributes.reviews.data)}/>
                            </div>
                        </div>
                        <div className={styles['middle-text']}>
                            <DollarRating rating={organizationData.data.attributes.dollarRating}/>
                            <div className={styles['icon-text']}>
                                <svg className={styles['icon']} xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                                    <g clip-path="url(#clip0_213_1875)">
                                        <path d="M6.59083 16.1C8.15833 14.0938 11.7333 9.23125 11.7333 6.5C11.7333 3.1875 9.10556 0.5 5.86667 0.5C2.62778 0.5 0 3.1875 0 6.5C0 9.23125 3.575 14.0938 5.1425 16.1C5.51833 16.5781 6.215 16.5781 6.59083 16.1ZM5.86667 4.5C6.38531 4.5 6.88272 4.71071 7.24945 5.08579C7.61619 5.46086 7.82222 5.96957 7.82222 6.5C7.82222 7.03043 7.61619 7.53914 7.24945 7.91421C6.88272 8.28929 6.38531 8.5 5.86667 8.5C5.34802 8.5 4.85062 8.28929 4.48388 7.91421C4.11714 7.53914 3.91111 7.03043 3.91111 6.5C3.91111 5.96957 4.11714 5.46086 4.48388 5.08579C4.85062 4.71071 5.34802 4.5 5.86667 4.5Z" fill="#F6F1EB"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_213_1875">
                                        <rect width="11.7333" height="16" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p>{organizationData.data.attributes.street + ', ' + organizationData.data.attributes.city + ', ' + organizationData.data.attributes.state}</p>
                            </div>

                        </div>
                        <div className={styles['bottom-text']}>
                            <p>{organizationData.data.attributes.description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles['slanted-bar']}></div>
                <div className={styles['right']}>
                    <img 
                        className={styles['image']} 
                        src={"https://strapi.discoverlincoln-c9.civiconnect.net" + organizationData.data.attributes.featureImage.data.attributes.url} 
                        alt='organization display image'>    
                    </img>
                </div>
            </div>
        </div>
    );
};

export default IndividualOrganizationHero;