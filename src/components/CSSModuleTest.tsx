// CSS Modules smoke test — import confirms Vite is scoping .module.css files.
// The TypeScript compiler accepting this import = CSS Modules are working.
// Safe to delete once the first real component is built.
import styles from './CSSModuleTest.module.css'

export default function CSSModuleTest() {
  return <div className={styles.root} />
}
