import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.container}>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={handleChange} />
    </form>
  );
}
