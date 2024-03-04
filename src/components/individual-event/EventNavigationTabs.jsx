import React from 'react';
import styles from '../../styles/components/OrganizationHero.module.css';

const EventNavigationTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className={styles['bottomBar']}>
        <a 
          className={`${styles['navLink']} ${activeTab === 'EventDetailsTab' ? styles['active'] : ''}`}
          onClick={() => onTabChange('EventDetailsTab')}
        >
          Details
        </a>
        <a 
          className={`${styles['navLink']} ${activeTab === 'EventMapTab' ? styles['active'] : ''}`}
          onClick={() => onTabChange('EventMapTab')}
        >
          Map
        </a>
        <a 
          className={`${styles['navLink']} ${activeTab === 'EventPhotosTab' ? styles['active'] : ''}`}
          onClick={() => onTabChange('EventPhotosTab')}
        >
          Photos
        </a>
        <a 
          className={`${styles['navLink']} ${activeTab === 'EventContactTab' ? styles['active'] : ''}`}
          onClick={() => onTabChange('EventContactTab')}
        >
          Contact
        </a>
    </div>
  );
};

export default EventNavigationTabs;

