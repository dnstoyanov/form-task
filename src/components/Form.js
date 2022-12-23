import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

function Form() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    axios
      .post('https://eoltdpdir508ryi.m.pipedream.net', data)
      .then(res => console.log(res))
      .catch(err => alert(`Error: ${err}`));
  };

  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <div className='input-row'>
        <div className='input-grp'>
          <label htmlFor='first-name'>First name</label>
          <input
            className='input-field'
            type='text'
            placeholder='First name'
            {...register('firstName', { required: 'This field is required', maxLength: 20 })}
          />
          {errors.firstName && <span className='test'>{errors.firstName.message}</span>}
        </div>
        <div className='input-grp'>
          <label htmlFor='last-name'>Last name</label>
          <input
            className='input-field'
            type='text'
            placeholder='Last name'
            {...register('lastName', { required: 'This field is required', maxLength: 100 })}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
      </div>
      <div className='input-row'>
        <div className='input-grp'>
          <label htmlFor='email'>E-mail</label>
          <input
            className='input-field'
            type='email'
            placeholder='Email'
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </div>

      <div className='input-row'>
        <div className='input-grp'>
          <label htmlFor='password'>Password</label>
          <input
            className='input-field'
            type='password'
            placeholder='Password'
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Password must have at minimum 6 characters',
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className='input-grp'>
          <label htmlFor='re-password'>Repeat password</label>
          <input
            className='input-field'
            type='password'
            placeholder='Repeat Password'
            {...register('repeatPassword', {
              required: 'This field is required',
              validate: value => {
                const { password } = getValues();
                return password === value || 'Passwords should match!';
              },
            })}
          />
          {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
        </div>
      </div>

      <div className='input-row'>
        <div className='input-grp'>
          <label htmlFor='phone'>Mobile number</label>
          <input
            className='input-field'
            type='tel'
            placeholder='Mobile number'
            {...register('mobileNumber', { required: 'This field is required' })}
          />
          {errors.mobileNumber && <span>{errors.mobileNumber.message}</span>}
        </div>
        <div className='input-grp'>
          <label htmlFor='country'>Country of residence</label>
          <select
            className='input-field-select'
            {...register('country', { required: 'This field is required' })}
          >
            <option value=''>Select your country...</option>
            <option value='France'>France</option>
            <option value='Bulgaria'>Bulgaria</option>
            <option value='United Kingdom'>United Kingdom</option>
            <option value='Other'>Other</option>
          </select>
          {errors.country && <span>{errors.country.message}</span>}
        </div>
      </div>

      <div className='input-row'>
        <div className='input-grp'>
          <label htmlFor='gender'>Gender</label>

          <div className='radio-grp'>
            <label htmlFor='male'>
              <input
                {...register('gender', { required: 'This field is required' })}
                type='radio'
                value='Male'
              />
              Male
            </label>
            <label htmlFor='female'>
              <input
                {...register('gender', { required: 'This field is required' })}
                type='radio'
                value=' Female'
              />
              Female
            </label>
            <label htmlFor='other'>
              <input
                {...register('gender', { required: 'This field is required' })}
                type='radio'
                value=' Other'
              />
              Other
            </label>
          </div>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <div className='input-grp'>
          <label htmlFor='date'>Date of registration</label>
          <input
            className='input-field-date'
            type='datetime-local'
            {...register('dateInfo', { required: 'This field is required' })}
          />
          {errors.dateInfo && <span>{errors.dateInfo.message}</span>}
        </div>
      </div>
      <div className='input-row'>
        <div className='input-grp'>
          <label htmlFor='textarea'>Upload file</label>
          <input
            className='input-field'
            type='file'
            {...register('file', { required: 'This field is required' })}
          />
          {errors.file && <span>{errors.file.message}</span>}
        </div>
      </div>

      <div className='input-row'>
        <div className='input-grp'>
          <label htmlFor='textarea'>Additional information</label>
          <textarea
            placeholder='Additional information'
            className='input-field-textarea'
            {...register('messageArea', { required: 'This field is required' })}
          />
          {errors.messageArea && <span>{errors.messageArea.message}</span>}
        </div>
      </div>

      <div className='input-row'>
        <label htmlFor='terms'>Terms and Conditions</label>
        <input
          type='checkbox'
          placeholder='checkbox'
          {...register('checkbox', { required: 'This field is required' })}
        />
        {errors.checkbox && <span>{errors.checkbox.message}</span>}
      </div>
      <div className='input-row'>
        <input className='Btn' type='submit' value='Submit' />
        <input className='Btn' type='reset' value='Reset Form' />
      </div>
    </form>
  );
}

export default Form;
