import React from 'react';
import styles from '../../styles/components/OrganizationHero.module.css';

const OrganizationNavigationTabs = ({ activeTab, onTabChange }) => {
  return (
    <div id='tabs' className={styles['bottomBar']}>
        <a 
          className={`${styles['navLink']} ${activeTab === 'OrganizationEventsTab' ? styles['active'] : ''}`}
          onClick={() => onTabChange('OrganizationEventsTab')}
        >
          Events
        </a>
        <a 
          className={`${styles['navLink']} ${activeTab === 'OrganizationContactTab' ? styles['active'] : ''}`}
          onClick={() => onTabChange('OrganizationContactTab')}
        >
          Contact
        </a>
        <a 
          className={`${styles['navLink']} ${activeTab === 'OrganizationReviewsTab' ? styles['active'] : ''}`}
          onClick={() => onTabChange('OrganizationReviewsTab')}
        >
          Reviews
        </a>
    </div>
  );
};

export default OrganizationNavigationTabs;
