import React from 'react';

export default function Process() {
  const steps = [
    {
      title: 'Consultancy',
      description: 'First of all we try to understand your need and vision about the project we are going to take',
      icon: 'https://spaciakolkata.online/wp-content/uploads/2023/01/Asset-1.png'
    },
    {
      title: 'Design',
      description: 'Then we offer a concept design to match your vision - which will be also aesthetically better.',
      icon: 'https://spaciakolkata.online/wp-content/uploads/2023/01/Asset-2.png'
    },
    {
      title: 'Budgeting',
      description: 'This process walks besides the designing process - smart budgeting is very important part.',
      icon: 'https://spaciakolkata.online/wp-content/uploads/2023/01/Asset-6.png'
    },
    {
      title: 'Execution',
      description: 'And here comes the execution part where we execute the plan - as per the planing of our experts.',
      icon: 'https://spaciakolkata.online/wp-content/uploads/2023/01/Asset-1.png'
    }
  ];

  return (
    <section className="py-[50px] md:py-[80px] bg-white">
      <div className="max-w-[88vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-[5px] shadow-[0px_12px_18px_-6px_rgba(34,56,101,0.04)] border border-gray-50 transition-all duration-300 hover:shadow-[0px_15px_25px_-5px_rgba(34,56,101,0.1)]"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-[#F4F5F6] rounded-full flex items-center justify-center p-4">
                <img 
                  src={step.icon} 
                  alt={step.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-[#242121] uppercase mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-gray-600 text-[14px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
