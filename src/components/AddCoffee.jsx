import React from 'react';

const AddCoffee = () => {

  const handleAddCoffee = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

      const response = await fetch('http://localhost:4000/coffees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCoffee)
      });


      const data = await response.json();
      console.log("After adding coffee to DB:", data);

      form.reset();
      alert('Coffee added successfully!');
  
  };

  return (
    <div className='bg-orange-50 px-6 md:px-24 py-10 rounded-xl max-w-4xl mx-auto'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl md:text-6xl font-bold text-[#374151] mb-3'>Add New Coffee</h1>
        <p className='text-black'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" name='name' required className="input input-bordered w-full" placeholder="Enter coffee name" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input type="text" name='Quantity' required className="input input-bordered w-full" placeholder="Enter coffee Quantity" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Supplier</label>
            <input type="text" name='supplier' required className="input input-bordered w-full" placeholder="Enter coffee supplier" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Taste</label>
            <input type="text" name='taste' required className="input input-bordered w-full" placeholder="Enter coffee taste" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input type="text" name='category' required className="input input-bordered w-full" placeholder="Enter coffee category" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Details</label>
            <input type="text" name='details' required className="input input-bordered w-full" placeholder="Enter coffee details" />
          </div>
        </div>
        <div className="mt-6">
          <label className="block mb-1 font-medium">Photo URL</label>
          <input type="text" name='photo' required className="input input-bordered w-full" placeholder="Enter photo URL" />
        </div>
        <input
          type="submit"
          className="mt-6 btn w-full bg-[#D2B48C] text-[#374151] hover:bg-[#b49874]"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
