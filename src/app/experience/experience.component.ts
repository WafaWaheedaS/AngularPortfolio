import { Component, OnInit, Input } from '@angular/core';
import { Work } from '../shared/work';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  componentWorkExp: Work[] = [
    {
      company: 'Qatar University, QNRF',
      position: 'Research Assistant',
      website: 'qu.edu.qa',
      startDate: '2020-',
      endDate:
        'Your end date, in YYY-MM-DD format (leave blank for a current position)',
      summary:
        'A one-sentence to one-paragraph summary of this employer or position',
      highlights: [
        'Bullet-point list items that you would like to include along with (or instead of) a summary paragraph.',
      ],
    },
    {
      company: 'Your employer name',
      position: 'Your job title',
      website: "The URL for the employer's website",
      startDate: 'Your start date, in YYYY-MM-DD format',
      endDate:
        'Your end date, in YYY-MM-DD format (leave blank for a current position)',
      summary:
        'A one-sentence to one-paragraph summary of this employer or position',
      highlights: [
        'Bullet-point list items that you would like to include along with (or instead of) a summary paragraph.',
      ],
    },
    {
      company: 'Your employer name',
      position: 'Your job title',
      website: "The URL for the employer's website",
      startDate: 'Your start date, in YYYY-MM-DD format',
      endDate:
        'Your end date, in YYY-MM-DD format (leave blank for a current position)',
      summary:
        'A one-sentence to one-paragraph summary of this employer or position',
      highlights: [
        'Bullet-point list items that you would like to include along with (or instead of) a summary paragraph.',
      ],
    },
  ];
}
