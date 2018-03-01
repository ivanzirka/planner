import React from 'react'
import '../styles/menu.scss'

export const Menu = (props) => {
  return (
    <div>
      <h3>Contents</h3>
      <ul>
        <li>Planting
        <ul>
            <li>What is dirt</li>
            <li>How to shovel</li>
            <li>When to stop</li>
          </ul>
        </li>
        <li>Watering
        <ul>
            <li>When</li>
            <li>How</li>
            <li>Why</li>
          </ul>
        </li>
        <li>Harvesting</li>
      </ul>
    </div>
  )
}