import React from 'react'

import styles from './styles.css'

export default ({
  ...props
}) => (
  <div {...props} className={styles.root}>
    <div className={ styles.impact }>
      <ul className={ styles.impactList }>

        <li className={ styles.impactItems }>
          <div className={ styles.impactSquare }>
            <div className={ styles.table }>
              <div className={ styles.tableCell } >
                <h1 className={ styles.title }>THE IMPACT</h1>
                <p className={ styles.impactLgContent }>Every dollar raised empowers girls around the world to live healthy, full, meaningful lives.</p>
              </div>
            </div>
          </div>
        </li>

        <li className={ `${ styles.impactItems } ${ styles.pinkList }` }>
          <div className={ styles.impactSquare }>
            <div className={ styles.table }>
              <div className={ styles.tableCell } >
                <h1 className={ styles.title }>$100</h1>
                <h4 className={ styles.subTitle }>Give access to clean water and sanitation.</h4>
                <p className={ styles.impactSmContent }>$100 can give six girls access to clean water for a year. Girls are more than twice as likely as boys to travel far distances to fetch drinking water. Globally, girls and women spend an estimated 200 million hours every single day collecting water.</p>
              </div>
            </div>
          </div>
        </li>


        <li className={ `${ styles.impactItems } ${ styles.image1 }` }>
          <div className={ styles.impactSquare }>
            <div className={ styles.table }>
              <div className={ styles.tableCell } >
              </div>
            </div>
          </div>
        </li>

        <li className={ `${ styles.impactItems } ${ styles.pinkList }` }>
          <div className={ styles.impactSquare }>
              <div className={ styles.table }>
                <div className={ styles.tableCell } >
                <h1 className={ styles.title }>$250</h1>
                <h4 className={ styles.subTitle }>Empower girls and young women through education.</h4>
                <p className={ styles.impactSmContent }>$250 can provide a family with training and livestock so they can earn the income needed to pay for their daughter’s school fees and supplies. This amount equips them with books, paper and other learning materials and provides for their tuition and other school expenses.</p>
                </div>
            </div>
          </div>
        </li>

        <li className={ `${ styles.impactItems } ${ styles.image2 }` }>
        <div className={ styles.impactSquare }>
          <div className={ styles.table }>
            <div className={ styles.tableCell } >
            </div>
            </div>
          </div>
        </li>

        <li className={ styles.impactItems }>
          <div className={ styles.impactSquare }>
              <div className={ styles.table }>
                <div className={ styles.tableCell } >
                </div>
            </div>
          </div>
        </li>

         <li className={ styles.impactItems }>
          <div className={ styles.impactSquare }>
              <div className={ styles.table }>
                <div className={ styles.tableCell } >
             </div>
            </div>
          </div>
        </li>

        <li className={ `${ styles.impactItems } ${ styles.pinkList }` }>
        <div className={ styles.impactSquare }>
            <div className={ styles.table }>
              <div className={ styles.tableCell } >
                <h1 className={ styles.title }>$500</h1>
                <h4 className={ styles.subTitle }>Educate and inspire girls to live healthy lives.</h4>
                <p className={ styles.impactSmContent }>$500 can provide training for enough coaches for 100 girls. Coaches spend 2 days a week with girls ages 8-14 for 10 weeks teaching them life skills through fun, engaging lessons that celebrate the joy of movement and running.</p>
              </div>
            </div>
          </div>
        </li>

        <li className={ `${ styles.impactItems } ${ styles.image3 }` }>
          <div className={ styles.impactSquare }>
            <div className={ styles.table }>
              <div className={ styles.tableCell } >
              </div>
            </div>
          </div>
        </li>

        <li className={ `${ styles.impactItems } ${ styles.pinkList }` }>
          <div className={ styles.impactSquare }>
              <div className={ styles.table }>
                <div className={ styles.tableCell } >
                  <h1 className={ styles.title }>$1000</h1>
                  <h4 className={ styles.subTitle }>Nourish their bodies and their souls.</h4>
                  <p className={ styles.impactSmContent }>$1000 can provide a nutritious breakfast and lunch to 100 girls for one week. Malnutrition is an underlying cause in nearly half of all child deaths in countries experiencing food crisis.</p>
                </div>
            </div>
          </div>
        </li>

        <li className={ `${ styles.impactItems } ${ styles.image4 }` }>
          <div className={ styles.impactSquare }>
              <div className={ styles.table }>
                <div className={ styles.tableCell } >
                </div>
            </div>
          </div>
        </li>

        <li className={ styles.impactItems }>
        <div className={ styles.impactSquare }>
            <div className={ styles.table }>
              <div className={ styles.tableCell } >
              <p className={ styles.quote }>Girls are the most powerful force for change on the planet.</p>
              <p className={ styles.author }>GIRL EFFECT</p>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
)
