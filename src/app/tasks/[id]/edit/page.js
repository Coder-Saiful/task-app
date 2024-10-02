import EditTaskForm from "@/components/Post/EditTask/EditTaskForm";

export const metadata = {
  title: "Task | Edit",
};

const EditTaskPage = ({params}) => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-10 m-auto">
            <div class="card">
              <div
                className="card-header text-white position-relative"
              >
                <h3 className="mb-0 text-center">Edit Task</h3>
              </div>
              <div class="card-body">
                <EditTaskForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditTaskPage;
