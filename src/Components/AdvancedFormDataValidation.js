import React, { useState } from 'react';

function AdvancedFormDataValidation() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  
  const validateFormData = (formData) => {
    const newErrors = {};
    
    // Check required fields
    const requiredFields = ['name', 'email', 'password'];
    requiredFields.forEach(field => {
      if (!formData.get(field)) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    const email = formData.get('email');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Password validation
    const password = formData.get('password');
    if (password && password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password
    const confirmPassword = formData.get('confirmPassword');
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // File validation
    const avatar = formData.get('avatar');
    if (avatar && avatar.size > 5 * 1024 * 1024) { // 5MB limit
      newErrors.avatar = 'File size must be less than 5MB';
    }
    
    if (avatar && !avatar.type.startsWith('image/')) {
      newErrors.avatar = 'Only image files are allowed';
    }
    
    return newErrors;
  };
  
  const processFormData = (formData) => {
    // Convert FormData to structured object
    const processedData = {
      user: {},
      files: {},
      preferences: {}
    };
    
    // Process each field
    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        processedData.files[key] = {
          name: value.name,
          type: value.type,
          size: value.size
        };
      } else if (key.startsWith('pref_')) {
        processedData.preferences[key.replace('pref_', '')] = value;
      } else {
        processedData.user[key] = value;
      }
    }
    
    return processedData;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setResult(null);
    
    // Create FormData
    const formData = new FormData(e.target);
    
    // Add additional data
    formData.append('submittedAt', new Date().toISOString());
    formData.append('userAgent', navigator.userAgent);
    
    // Validate
    const validationErrors = validateFormData(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Process and display
    const processedData = processFormData(formData);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResult({
        success: true,
        message: 'Form submitted successfully!',
        data: processedData,
        rawFormData: Array.from(formData.entries()).map(([key, value]) => ({
          key,
          value: value instanceof File 
            ? `[File: ${value.name}]` 
            : value
        }))
      });
      
      // Reset form
      e.target.reset();
      
    } catch (error) {
      setResult({
        success: false,
        message: `Submission failed: ${error.message}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Advanced FormData with Validation</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <div style={{ marginBottom: '25px' }}>
          <h3>Basic Information</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.name ? '#dc3545' : '#ced4da'}`,
                borderRadius: '5px'
              }}
            />
            {errors.name && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.name}
              </div>
            )}
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.email ? '#dc3545' : '#ced4da'}`,
                borderRadius: '5px'
              }}
            />
            {errors.email && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.email}
              </div>
            )}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>
                Password *
              </label>
              <input
                type="password"
                name="password"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: `1px solid ${errors.password ? '#dc3545' : '#ced4da'}`,
                  borderRadius: '5px'
                }}
              />
              {errors.password && (
                <div style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                  {errors.password}
                </div>
              )}
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: `1px solid ${errors.confirmPassword ? '#dc3545' : '#ced4da'}`,
                  borderRadius: '5px'
                }}
              />
              {errors.confirmPassword && (
                <div style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px' }}>
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Profile Section */}
        <div style={{ marginBottom: '25px' }}>
          <h3>Profile</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Avatar (Optional)
            </label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              style={{
                width: '100%',
                padding: '10px',
                border: `1px solid ${errors.avatar ? '#dc3545' : '#ced4da'}`,
                borderRadius: '5px'
              }}
            />
            {errors.avatar && (
              <div style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px' }}>
                {errors.avatar}
              </div>
            )}
            <small style={{ color: '#6c757d', display: 'block', marginTop: '5px' }}>
              Max file size: 5MB, Image files only
            </small>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Bio
            </label>
            <textarea
              name="bio"
              rows="3"
              style={{ width: '100%', padding: '10px' }}
            />
          </div>
        </div>
        
        {/* Preferences */}
        <div style={{ marginBottom: '25px' }}>
          <h3>Preferences</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Theme
            </label>
            <select 
              name="pref_theme" 
              style={{ width: '100%', padding: '10px' }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Language
            </label>
            <select 
              name="pref_language" 
              style={{ width: '100%', padding: '10px' }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '15px 30px',
            backgroundColor: isSubmitting ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            width: '100%'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Form'}
        </button>
      </form>
      
      {/* Results */}
      {result && (
        <div style={{ 
          marginTop: '30px', 
          padding: '20px',
          backgroundColor: result.success ? '#d4edda' : '#f8d7da',
          color: result.success ? '#155724' : '#721c24',
          borderRadius: '10px'
        }}>
          <h3>{result.success ? '✅ Success!' : '❌ Error'}</h3>
          <p>{result.message}</p>
          
          {result.data && (
            <div style={{ marginTop: '20px' }}>
              <h4>Processed Data:</h4>
              <pre style={{ 
                backgroundColor: 'rgba(255,255,255,0.3)', 
                padding: '15px', 
                borderRadius: '5px',
                overflow: 'auto',
                fontSize: '14px'
              }}>
                {JSON.stringify(result.data, null, 2)}
              </pre>
              
              <h4 style={{ marginTop: '20px' }}>Raw FormData Entries:</h4>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.3)', 
                padding: '15px', 
                borderRadius: '5px',
                fontSize: '14px'
              }}>
                {result.rawFormData.map((item, index) => (
                  <div key={index} style={{ marginBottom: '5px' }}>
                    <strong>{item.key}:</strong> {item.value}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdvancedFormDataValidation;