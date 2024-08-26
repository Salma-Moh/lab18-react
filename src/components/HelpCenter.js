<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpCenter.css';

const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState('FAQ');

    return (
        <div>
            <div className="navigation-buttons">
                <Link to="/" className="nav-button left-button">Home</Link>
            </div>
            <div className="help">
                <div className="article-section">
                    <h1 className="headline">Add extra spark with Yodeck Apps</h1>
                    <p className="description">
                        All completely free & incredibly easy to use. Delight your viewers with real-time news feeds and weather updates.
                        Link to your favorite data dashboards to boost productivity. Sync with the most popular design services to up your sales.
                        Yodeck apps make your screens unforgettable.
                    </p>
                </div>
                <div className="tabs">
                    <button
                        className={`tab-button ${activeTab === 'FAQ' ? 'active' : ''}`}
                        onClick={() => setActiveTab('FAQ')}
                    >
                        FAQ
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'ContactUs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ContactUs')}
                    >
                        Contact Us
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === 'FAQ' && (
                        <div className="faq-content">
                            <h3>Frequently Asked Questions</h3>
                            <p>Here are some of the most common questions our users ask.</p>
                        </div>
                    )}
                    {activeTab === 'ContactUs' && (
                        <div className="contact-content">
                            <h3>Contact Us</h3>
                            <p>If you have any questions, feel free to reach out to our support team.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpCenter.css';

const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState('FAQ');

    return (
        <div>
            <div className="navigation-buttons">
                <Link to="/" className="nav-button left-button">Home</Link>
            </div>
            <div className="help">
                <div className="article-section">
                    <h1 className="headline">Add extra spark with Yodeck Apps</h1>
                    <p className="description">
                        All completely free & incredibly easy to use. Delight your viewers with real-time news feeds and weather updates.
                        Link to your favorite data dashboards to boost productivity. Sync with the most popular design services to up your sales.
                        Yodeck apps make your screens unforgettable.
                    </p>
                </div>
                <div className="tabs">
                    <button
                        className={`tab-button ${activeTab === 'FAQ' ? 'active' : ''}`}
                        onClick={() => setActiveTab('FAQ')}
                    >
                        FAQ
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'ContactUs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ContactUs')}
                    >
                        Contact Us
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === 'FAQ' && (
                        <div className="faq-content">
                            <h3>Frequently Asked Questions</h3>
                            <p>Here are some of the most common questions our users ask.</p>
                        </div>
                    )}
                    {activeTab === 'ContactUs' && (
                        <div className="contact-content">
                            <h3>Contact Us</h3>
                            <p>If you have any questions, feel free to reach out to our support team.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
>>>>>>> bb1fc59d7785745d625c8253e090eceb3fddf68b
