const GenderCheckboxes = () => {
  return (
    <div className="flex gap-3">
      <div className="form-control">
        <label className="label cursor-pointer flex gap-2" htmlFor="male">
          <span className="label-text">Male</span>
          <input type="radio"  className="radio" id="male" name="gender"/>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer flex gap-2" htmlFor="female">
          <span className="label-text">Female</span>
          <input type="radio"  className="radio" id="female" name="gender"/>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckboxes;
