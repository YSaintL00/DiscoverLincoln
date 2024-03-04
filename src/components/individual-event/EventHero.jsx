import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/OrganizationHero.module.css';
import Image from 'next/image'; 
import AddToItineraryButton from '../AddToItineraryButton';
import Link from 'next/link';
import formatDate from '@/util/formatDate';

const IndividualEventHero = ({ eventData }) => {

  return (
    <div className={styles['event-hero-section']}>
      <div className={styles['left']}>
        <div className={styles['organization-text']}>
          <div className={styles['top-text']}>
            <h1 className={styles['main-heading']}>{eventData.data.attributes.title}</h1>
            <h2 className={styles['sub-heading']}>{eventData.data.attributes.type}</h2>
          </div>
          <div className={styles['middle-text']}>
            <div className={styles['icon-text']}>
              <Image
                className={styles['icon']}
                alt="Location Icon"
                src="/locationIcon.svg"
                width="12"
                height="16"
              />
              <h3>{eventData.data.attributes.street + ', ' + eventData.data.attributes.city + ', ' + eventData.data.attributes.state}</h3>
            </div>
            <div className={styles['icon-text']}>
              <Image
                className={styles['icon']}
                alt="Calender Icon"
                src="/calender.svg"
                width="12"
                height="14"
              />
              <h3>{formatDate(eventData.data.attributes.startDate) + ' - ' + formatDate(eventData.data.attributes.endDate)}</h3>
            </div>
            <div className={styles['icon-text']}>
              <svg className={styles['icon']} xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M4.54887 0C5.102 0 5.54887 0.446875 5.54887 1V2.11562C5.59887 2.12187 5.64575 2.12813 5.69575 2.1375C5.70825 2.14063 5.71762 2.14062 5.73012 2.14375L7.23012 2.41875C7.77387 2.51875 8.13325 3.04062 8.03325 3.58125C7.93325 4.12187 7.41137 4.48438 6.87075 4.38438L5.38637 4.1125C4.40825 3.96875 3.54575 4.06563 2.9395 4.30625C2.33325 4.54688 2.0895 4.87812 2.03325 5.18437C1.97075 5.51875 2.01762 5.70625 2.07075 5.82188C2.127 5.94375 2.24262 6.08125 2.47075 6.23438C2.98012 6.56875 3.76137 6.7875 4.77387 7.05625L4.8645 7.08125C5.75825 7.31875 6.852 7.60625 7.6645 8.1375C8.10825 8.42812 8.527 8.82187 8.78637 9.37187C9.052 9.93125 9.10825 10.5563 8.98637 11.2219C8.77075 12.4094 7.952 13.2031 6.93637 13.6187C6.50825 13.7937 6.04262 13.9062 5.54887 13.9625V15C5.54887 15.5531 5.102 16 4.54887 16C3.99575 16 3.54887 15.5531 3.54887 15V13.9094C3.53637 13.9063 3.52075 13.9062 3.50825 13.9031H3.502C2.7395 13.7844 1.48637 13.4563 0.642623 13.0813C0.139498 12.8563 -0.0886268 12.2656 0.136373 11.7625C0.361373 11.2594 0.951998 11.0313 1.45512 11.2563C2.10825 11.5469 3.18325 11.8344 3.80512 11.9312C4.802 12.0781 5.62387 11.9938 6.18012 11.7656C6.70825 11.55 6.94887 11.2375 7.01762 10.8625C7.077 10.5313 7.03012 10.3406 6.977 10.225C6.91762 10.1 6.802 9.9625 6.57075 9.80937C6.05825 9.475 5.27387 9.25625 4.25825 8.9875L4.17075 8.96562C3.28012 8.72812 2.18637 8.4375 1.37387 7.90625C0.930123 7.61562 0.514498 7.21875 0.255123 6.66875C-0.0073767 6.10937 -0.0605017 5.48437 0.0644983 4.81875C0.289498 3.625 1.18325 2.85 2.19887 2.44688C2.6145 2.28125 3.07075 2.16875 3.54887 2.10313V1C3.54887 0.446875 3.99575 0 4.54887 0Z" fill="#F6F1EB"/>
              </svg>
              <h3>{eventData.data.attributes.price + '.00 / ticket'}</h3>
            </div>
          </div>
          <div className={styles['bottom-text']}>
            <p>{eventData.data.attributes.description}</p>
          </div>
          <Link href={eventData.data.attributes.regLink || "#"} target='_blank' className={styles['itineraryButton']}>RSVP</Link>
        </div>
      </div>
      <div className={styles['diagonal']}></div>
      <div className={styles['right']}>
        <img className={styles['image']} 
          src={"https://strapi.discoverlincoln-c9.civiconnect.net" + eventData.data.attributes.coverImage.data.attributes.url} 
          width="1074" 
          height="611">
        </img>
      </div>
      <div className='absolute top-16 right-0 z-50'>
        <AddToItineraryButton type="events" id={eventData.data.id} />
      </div>
    </div>
  );
};

export default IndividualEventHero;

