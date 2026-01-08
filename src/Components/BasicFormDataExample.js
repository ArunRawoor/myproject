import React, { useState } from 'react';

function BasicFormDataExample() {
  const [result, setResult] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Create FormData object from form
    const formData = new FormData(e.target);
    
    // 2. Display FormData contents
    console.log('FormData entries:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    
    // 3. Convert to regular object (optional)
    const formDataObject = Object.fromEntries(formData);
    console.log('As object:', formDataObject);
    
    // 4. Send to API
    try {
      const response = await fetch('/dummyAPI/NeedToConnectBackend/', {
        method: 'POST',
        body: formData, // FormData works directly as body
        // Headers are set automatically for FormData
      });
      
      const data = await response.json();
      setResult(`Success! Response: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };
  
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Basic FormData Example</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            name="username"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        {/* Simple Email Input Without Validation Email Input */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        {/* Select drop downs */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Country:
          </label>
          <select 
            name="country" 
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="in">India</option>
            <option value="ca">Canada</option>
          </select>
        </div>
        
        {/* Radio Buttons */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Gender:
          </label>
          <div style={{ display: 'flex', gap: '15px' }}>
            <label>
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" />
              Other
            </label>
          </div>
        </div>
        
        {/* Checkboxes */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Interests:
          </label>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              <input type="checkbox" name="interests" value="sports" />
              Sports
            </label>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              <input type="checkbox" name="interests" value="music" />
              Music
            </label>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              <input type="checkbox" name="interests" value="reading" />
              Reading
            </label>
          </div>
        </div>
        
        {/* Textarea */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Message:
          </label>
          <textarea
            name="message"
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Submit Form
        </button>
      </form>
      
      {result && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h3>Result:</h3>
          <pre style={{ 
            backgroundColor: '#e9ecef', 
            padding: '10px', 
            borderRadius: '5px',
            overflow: 'auto'
          }}>
            {result}
          </pre>
        </div>
      )}
      
      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#e8f4fd',
        borderRadius: '8px'
      }}>
      </div>
    </div>
  );
}

export default BasicFormDataExample;