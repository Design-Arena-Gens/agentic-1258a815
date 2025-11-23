'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('workout')
  const [weight, setWeight] = useState('')
  const [bodyFat, setBodyFat] = useState('')
  const [measurements, setMeasurements] = useState({
    chest: '',
    arms: '',
    waist: '',
    thighs: ''
  })

  const workoutProgram = {
    day1: {
      name: 'Chest & Triceps',
      exercises: [
        { name: 'Barbell Bench Press', sets: '4 sets x 8-10 reps', rest: '90 sec' },
        { name: 'Incline Dumbbell Press', sets: '4 sets x 10-12 reps', rest: '90 sec' },
        { name: 'Cable Flyes', sets: '3 sets x 12-15 reps', rest: '60 sec' },
        { name: 'Tricep Dips', sets: '4 sets x 10-12 reps', rest: '60 sec' },
        { name: 'Overhead Tricep Extension', sets: '3 sets x 12-15 reps', rest: '60 sec' },
        { name: 'Tricep Pushdowns', sets: '3 sets x 15-20 reps', rest: '45 sec' }
      ]
    },
    day2: {
      name: 'Back & Biceps',
      exercises: [
        { name: 'Deadlifts', sets: '4 sets x 6-8 reps', rest: '2 min' },
        { name: 'Pull-ups', sets: '4 sets x 8-12 reps', rest: '90 sec' },
        { name: 'Barbell Rows', sets: '4 sets x 8-10 reps', rest: '90 sec' },
        { name: 'Lat Pulldowns', sets: '3 sets x 10-12 reps', rest: '60 sec' },
        { name: 'Barbell Curls', sets: '4 sets x 10-12 reps', rest: '60 sec' },
        { name: 'Hammer Curls', sets: '3 sets x 12-15 reps', rest: '45 sec' }
      ]
    },
    day3: {
      name: 'Legs',
      exercises: [
        { name: 'Squats', sets: '5 sets x 6-8 reps', rest: '2 min' },
        { name: 'Romanian Deadlifts', sets: '4 sets x 8-10 reps', rest: '90 sec' },
        { name: 'Leg Press', sets: '4 sets x 12-15 reps', rest: '90 sec' },
        { name: 'Leg Curls', sets: '4 sets x 12-15 reps', rest: '60 sec' },
        { name: 'Calf Raises', sets: '5 sets x 15-20 reps', rest: '45 sec' },
        { name: 'Leg Extensions', sets: '3 sets x 15-20 reps', rest: '45 sec' }
      ]
    },
    day4: {
      name: 'Shoulders & Abs',
      exercises: [
        { name: 'Military Press', sets: '4 sets x 8-10 reps', rest: '90 sec' },
        { name: 'Dumbbell Lateral Raises', sets: '4 sets x 12-15 reps', rest: '60 sec' },
        { name: 'Face Pulls', sets: '4 sets x 15-20 reps', rest: '60 sec' },
        { name: 'Arnold Press', sets: '3 sets x 10-12 reps', rest: '60 sec' },
        { name: 'Hanging Leg Raises', sets: '4 sets x 15-20 reps', rest: '60 sec' },
        { name: 'Cable Crunches', sets: '4 sets x 20-25 reps', rest: '45 sec' }
      ]
    },
    day5: {
      name: 'Arms & Forearms',
      exercises: [
        { name: 'Close-grip Bench Press', sets: '4 sets x 8-10 reps', rest: '90 sec' },
        { name: 'Preacher Curls', sets: '4 sets x 10-12 reps', rest: '60 sec' },
        { name: 'Skull Crushers', sets: '4 sets x 10-12 reps', rest: '60 sec' },
        { name: 'Concentration Curls', sets: '3 sets x 12-15 reps', rest: '45 sec' },
        { name: 'Diamond Push-ups', sets: '3 sets x 15-20 reps', rest: '45 sec' },
        { name: 'Wrist Curls', sets: '4 sets x 20-25 reps', rest: '30 sec' }
      ]
    }
  }

  const nutritionPlan = [
    {
      title: 'Bulking Phase (Muscle Growth)',
      calories: 'Bodyweight x 18-20 calories',
      macros: [
        'Protein: 1.2-1.5g per lb bodyweight',
        'Carbs: 2.5-3.5g per lb bodyweight',
        'Fats: 0.4-0.6g per lb bodyweight'
      ],
      meals: [
        'Breakfast: Oats, eggs, banana, protein shake',
        'Mid-morning: Greek yogurt, berries, nuts',
        'Lunch: Rice, chicken breast, vegetables',
        'Pre-workout: Sweet potato, protein shake',
        'Post-workout: Rice, lean beef, vegetables',
        'Dinner: Pasta, salmon, salad',
        'Before bed: Cottage cheese, almonds'
      ]
    },
    {
      title: 'Maintenance Phase',
      calories: 'Bodyweight x 14-16 calories',
      macros: [
        'Protein: 1g per lb bodyweight',
        'Carbs: 1.5-2g per lb bodyweight',
        'Fats: 0.4-0.5g per lb bodyweight'
      ],
      meals: [
        'Breakfast: Eggs, whole wheat toast, avocado',
        'Mid-morning: Protein shake, apple',
        'Lunch: Quinoa, turkey, mixed vegetables',
        'Pre-workout: Banana, rice cakes',
        'Post-workout: Rice, chicken, broccoli',
        'Dinner: Sweet potato, fish, salad'
      ]
    },
    {
      title: 'Cutting Phase (Fat Loss)',
      calories: 'Bodyweight x 10-12 calories',
      macros: [
        'Protein: 1.2-1.5g per lb bodyweight',
        'Carbs: 0.8-1.2g per lb bodyweight',
        'Fats: 0.3-0.4g per lb bodyweight'
      ],
      meals: [
        'Breakfast: Egg whites, oatmeal, berries',
        'Mid-morning: Protein shake',
        'Lunch: Chicken breast, vegetables, quinoa',
        'Pre-workout: Rice cakes, banana',
        'Post-workout: Tilapia, sweet potato, greens',
        'Dinner: Lean turkey, salad, vegetables'
      ]
    }
  ]

  const tips = [
    {
      title: 'Progressive Overload',
      description: 'Continuously increase weight, reps, or sets over time to force muscle adaptation and growth.'
    },
    {
      title: 'Rest & Recovery',
      description: '7-9 hours of sleep per night. Muscles grow during rest, not during workouts.'
    },
    {
      title: 'Consistency',
      description: 'Train 5 days per week. Missing workouts slows progress significantly.'
    },
    {
      title: 'Proper Form',
      description: 'Perfect technique prevents injuries and ensures maximum muscle activation.'
    },
    {
      title: 'Hydration',
      description: 'Drink 1 gallon of water daily. Dehydration reduces performance and recovery.'
    },
    {
      title: 'Mind-Muscle Connection',
      description: 'Focus on feeling the target muscle work during each rep for better results.'
    }
  ]

  const handleProgressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Progress recorded! Keep tracking your measurements weekly.')
  }

  return (
    <div className="container">
      <div className="header">
        <h1>💪 BODYBUILDING PROGRAM</h1>
        <p>Professional Training System for Maximum Muscle Growth</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'workout' ? 'active' : ''}`}
          onClick={() => setActiveTab('workout')}
        >
          Workout Program
        </button>
        <button
          className={`tab ${activeTab === 'nutrition' ? 'active' : ''}`}
          onClick={() => setActiveTab('nutrition')}
        >
          Nutrition Plans
        </button>
        <button
          className={`tab ${activeTab === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveTab('tips')}
        >
          Training Tips
        </button>
        <button
          className={`tab ${activeTab === 'progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          Track Progress
        </button>
      </div>

      <div className="content">
        {activeTab === 'workout' && (
          <div>
            <h2 style={{ color: '#667eea', fontSize: '2rem', marginBottom: '10px' }}>
              5-Day Split Training Program
            </h2>
            <p style={{ marginBottom: '30px', color: '#666' }}>
              Advanced bodybuilding split designed for maximum hypertrophy and strength gains.
              Train 5 days per week with 2 rest days.
            </p>

            <div className="workout-grid">
              {Object.entries(workoutProgram).map(([key, day]) => (
                <div key={key} className="workout-card">
                  <h3>{day.name}</h3>
                  <ul className="exercise-list">
                    {day.exercises.map((exercise, idx) => (
                      <li key={idx}>
                        <strong>{exercise.name}</strong>
                        {exercise.sets} | Rest: {exercise.rest}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div className="nutrition-section">
            <h2>Nutrition Plans for Different Goals</h2>
            <p style={{ marginBottom: '30px', color: '#666' }}>
              Proper nutrition is 70% of your results. Choose the plan that matches your current goal.
            </p>

            <div className="nutrition-cards">
              {nutritionPlan.map((plan, idx) => (
                <div key={idx} className="nutrition-card">
                  <h3>{plan.title}</h3>
                  <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>{plan.calories}</p>
                  <h4 style={{ marginBottom: '10px' }}>Macros:</h4>
                  <ul>
                    {plan.macros.map((macro, mIdx) => (
                      <li key={mIdx}>{macro}</li>
                    ))}
                  </ul>
                  <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>Sample Meal Plan:</h4>
                  <ul>
                    {plan.meals.map((meal, mIdx) => (
                      <li key={mIdx}>{meal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div>
            <h2 style={{ color: '#667eea', fontSize: '2rem', marginBottom: '10px' }}>
              Essential Training Principles
            </h2>
            <p style={{ marginBottom: '30px', color: '#666' }}>
              Follow these principles to maximize your muscle growth and avoid common mistakes.
            </p>

            <div className="tips-grid">
              {tips.map((tip, idx) => (
                <div key={idx} className="tip-card">
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '40px', background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Supplementation Guide</h3>
              <ul style={{ lineHeight: '2', color: '#555' }}>
                <li><strong>Protein Powder:</strong> 20-40g post-workout and as needed to hit protein goals</li>
                <li><strong>Creatine Monohydrate:</strong> 5g daily (best proven supplement for strength)</li>
                <li><strong>Beta-Alanine:</strong> 3-5g daily (improves endurance)</li>
                <li><strong>Multivitamin:</strong> Daily to cover micronutrient needs</li>
                <li><strong>Fish Oil:</strong> 2-3g daily (reduces inflammation, supports joints)</li>
                <li><strong>Pre-workout:</strong> Optional, 30 minutes before training</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="progress-section">
            <h2>Track Your Progress</h2>
            <p style={{ marginBottom: '30px', color: '#666' }}>
              Measure your progress weekly. What gets measured gets improved.
            </p>

            <form className="progress-form" onSubmit={handleProgressSubmit}>
              <div className="form-group">
                <label>Current Weight (lbs)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g., 185"
                />
              </div>

              <div className="form-group">
                <label>Body Fat % (estimated)</label>
                <input
                  type="number"
                  value={bodyFat}
                  onChange={(e) => setBodyFat(e.target.value)}
                  placeholder="e.g., 15"
                />
              </div>

              <h3 style={{ color: '#667eea', marginTop: '30px', marginBottom: '20px' }}>
                Body Measurements (inches)
              </h3>

              <div className="form-group">
                <label>Chest</label>
                <input
                  type="number"
                  step="0.1"
                  value={measurements.chest}
                  onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
                  placeholder="e.g., 42.5"
                />
              </div>

              <div className="form-group">
                <label>Arms (flexed)</label>
                <input
                  type="number"
                  step="0.1"
                  value={measurements.arms}
                  onChange={(e) => setMeasurements({...measurements, arms: e.target.value})}
                  placeholder="e.g., 16.0"
                />
              </div>

              <div className="form-group">
                <label>Waist</label>
                <input
                  type="number"
                  step="0.1"
                  value={measurements.waist}
                  onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                  placeholder="e.g., 32.0"
                />
              </div>

              <div className="form-group">
                <label>Thighs</label>
                <input
                  type="number"
                  step="0.1"
                  value={measurements.thighs}
                  onChange={(e) => setMeasurements({...measurements, thighs: e.target.value})}
                  placeholder="e.g., 24.5"
                />
              </div>

              <button type="submit" className="btn">Record Progress</button>
            </form>

            <div style={{ marginTop: '40px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Expected Progress Timeline</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>Month 1-3</h4>
                  <div className="value">5-10</div>
                  <p>lbs muscle gain (beginner)</p>
                </div>
                <div className="stat-card">
                  <h4>Month 4-6</h4>
                  <div className="value">3-6</div>
                  <p>lbs muscle gain</p>
                </div>
                <div className="stat-card">
                  <h4>Month 7-12</h4>
                  <div className="value">2-4</div>
                  <p>lbs muscle gain/month</p>
                </div>
                <div className="stat-card">
                  <h4>Strength Gains</h4>
                  <div className="value">20-50%</div>
                  <p>in first 6 months</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
