import React from "react";

function TechProjectCard({ title }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:-translate-y-2 transition">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Project description goes here
      </p>
    </div>
  );
}

export default TechProjectCard;
