/**
 * Form.js — Controlled Contact / Inquiry Form
 * --------------------------------------------
 * Built from the "React Form Component" pattern:
 * - one useState object holds every field
 * - handleChange updates that object as the user types
 * - handleSubmit validates, then shows a Result panel
 * - Reset clears both the fields and the result
 *
 * id="contact" matches the navbar / footer link href="#contact"
 */

import { useState } from 'react'
import Title from './Title'
import '../scss/components/_form.scss'

/** Empty form — also used by Reset so every field goes back to a known start. */
const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  terms: false,
}

const Form = () => {
  // One object for all inputs (text, radio, checkbox) instead of many useState calls
  const [formData, setFormData] = useState(initialFormData)
  // Field-name → error-message map. Empty object means "no errors yet".
  const [errors, setErrors] = useState({})
  // After a valid submit we store a copy of the values here to render the Result block.
  const [submittedData, setSubmittedData] = useState(null)

  /**
   * handleChange — shared by every input
   * -------------------------------------
   * event.target gives us:
   *   name  → which key in formData to update
   *   value → what the user typed (text / radio)
   *   type  → so checkboxes can use `checked` instead of `value`
   *   checked → true/false for the terms checkbox
   *
   * The spread (...formData) copies the previous fields so we only change one key.
   */
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  /**
   * validate — returns an errors object
   * ------------------------------------
   * Each failed rule adds a key matching the input `name`.
   * If the returned object has no keys, the form is valid.
   */
  const validate = (data) => {
    const nextErrors = {}

    if (!data.firstName.trim()) {
      nextErrors.firstName = 'First name is required.'
    }

    if (!data.lastName.trim()) {
      nextErrors.lastName = 'Last name is required.'
    }

    if (!data.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!data.password) {
      nextErrors.password = 'Password is required.'
    } else if (data.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.'
    }

    if (!data.confirmPassword) {
      nextErrors.confirmPassword = 'Please confirm your password.'
    } else if (data.confirmPassword !== data.password) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }

    if (!data.gender) {
      nextErrors.gender = 'Please select a gender.'
    }

    if (!data.terms) {
      nextErrors.terms = 'You must accept the terms to continue.'
    }

    return nextErrors
  }

  /**
   * handleSubmit — runs when the form is submitted
   * -----------------------------------------------
   * preventDefault stops the browser from reloading the page.
   * If validation fails we keep the user on the form.
   * If it passes we copy the values into submittedData (the Result panel).
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate(formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmittedData(null)
      return
    }

    setSubmittedData({ ...formData })
  }

  /** Restore empty fields, clear errors, hide the Result panel. */
  const handleReset = () => {
    setFormData(initialFormData)
    setErrors({})
    setSubmittedData(null)
  }

  return (
    <section className='section form-section' id='contact'>
      <Title title='contact' subTitle='form' />

      <div className='section-center form-center'>
        {/*
          noValidate: we run our own JS validation instead of the browser popup.
          onSubmit is on the <form>, not the button — Enter in an input still submits.
        */}
        <form className='contact-form' onSubmit={handleSubmit} onReset={handleReset} noValidate>
          {/* First name — text input bound to formData.firstName */}
          <div className='form-row'>
            <label htmlFor='firstName' className='form-label'>
              First name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='form-input'
              value={formData.firstName}
              onChange={handleChange}
              autoComplete='given-name'
            />
            {errors.firstName && <p className='form-error'>{errors.firstName}</p>}
          </div>

          {/* Last name */}
          <div className='form-row'>
            <label htmlFor='lastName' className='form-label'>
              Last name
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              className='form-input'
              value={formData.lastName}
              onChange={handleChange}
              autoComplete='family-name'
            />
            {errors.lastName && <p className='form-error'>{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div className='form-row'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='form-input'
              value={formData.email}
              onChange={handleChange}
              autoComplete='email'
            />
            {errors.email && <p className='form-error'>{errors.email}</p>}
          </div>

          {/* Password */}
          <div className='form-row'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='form-input'
              value={formData.password}
              onChange={handleChange}
              autoComplete='new-password'
            />
            {errors.password && <p className='form-error'>{errors.password}</p>}
          </div>

          {/* Confirm password — compared against password in validate() */}
          <div className='form-row'>
            <label htmlFor='confirmPassword' className='form-label'>
              Confirm password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='form-input'
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete='new-password'
            />
            {errors.confirmPassword && (
              <p className='form-error'>{errors.confirmPassword}</p>
            )}
          </div>

          {/*
            Gender radios share the same name="gender" so only one can be selected.
            The checked prop compares each option to formData.gender.
          */}
          <fieldset className='form-row form-fieldset'>
            <legend className='form-label'>Gender</legend>
            <div className='form-radios'>
              <label className='form-check'>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label className='form-check'>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label className='form-check'>
                <input
                  type='radio'
                  name='gender'
                  value='other'
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
            {errors.gender && <p className='form-error'>{errors.gender}</p>}
          </fieldset>

          {/* Terms checkbox — boolean stored as formData.terms */}
          <div className='form-row'>
            <label className='form-check'>
              <input
                type='checkbox'
                name='terms'
                checked={formData.terms}
                onChange={handleChange}
              />
              I agree to the terms and conditions
            </label>
            {errors.terms && <p className='form-error'>{errors.terms}</p>}
          </div>

          {/* Submit posts the form; Reset uses native type="reset" + onReset handler */}
          <div className='form-actions'>
            <button type='submit' className='btn form-btn'>
              Submit
            </button>
            <button type='reset' className='btn form-btn form-btn-reset'>
              Reset
            </button>
          </div>
        </form>

        {/*
          Result — only rendered after a successful submit.
          Passwords are omitted so they never appear in the page output.
        */}
        {submittedData && (
          <aside className='form-result' aria-live='polite'>
            <h3>Result</h3>
            <ul className='form-result-list'>
              <li>
                <strong>First name:</strong> {submittedData.firstName}
              </li>
              <li>
                <strong>Last name:</strong> {submittedData.lastName}
              </li>
              <li>
                <strong>Email:</strong> {submittedData.email}
              </li>
              <li>
                <strong>Gender:</strong> {submittedData.gender}
              </li>
              <li>
                <strong>Terms accepted:</strong> yes
              </li>
            </ul>
          </aside>
        )}
      </div>
    </section>
  )
}

export default Form
