function Project({ project }) {
  return (
    <div>
      <div key={project.ID} className="grid grid-cols-2">
        <div className="">
          <h1>{project.NAME}</h1>
          <div>{project.PREVIEW_TEXT}</div>
        </div>
        <img src={project.DETAIL_PICTURE} className="w-7/12" />
      </div>
    </div>
  );
}

export default Project;
