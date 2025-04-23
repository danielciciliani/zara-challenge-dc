function BackToGrid() {
  const backIcon = '/back_icon.svg';

  return (
    <>
      <div className="button_back-to-grid">
        <img
          className="button_back-to-grid_icon"
          src={backIcon}
          alt="back icon"
        />
        <p className="button_back-to-grid_text">back</p>
      </div>
    </>
  );
}

export default BackToGrid;
